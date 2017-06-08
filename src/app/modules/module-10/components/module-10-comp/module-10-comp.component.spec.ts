/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module10CompComponent } from './module-10-comp.component';

describe('Module10CompComponent', () => {
  let component: Module10CompComponent;
  let fixture: ComponentFixture<Module10CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module10CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module10CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
