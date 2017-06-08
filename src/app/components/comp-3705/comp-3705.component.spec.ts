/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3705Component } from './comp-3705.component';

describe('Comp3705Component', () => {
  let component: Comp3705Component;
  let fixture: ComponentFixture<Comp3705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
