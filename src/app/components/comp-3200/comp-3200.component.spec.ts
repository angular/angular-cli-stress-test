/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3200Component } from './comp-3200.component';

describe('Comp3200Component', () => {
  let component: Comp3200Component;
  let fixture: ComponentFixture<Comp3200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
