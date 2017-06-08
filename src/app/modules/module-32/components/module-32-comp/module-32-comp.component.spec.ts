/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module32CompComponent } from './module-32-comp.component';

describe('Module32CompComponent', () => {
  let component: Module32CompComponent;
  let fixture: ComponentFixture<Module32CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module32CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module32CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
