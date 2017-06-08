/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3730Component } from './comp-3730.component';

describe('Comp3730Component', () => {
  let component: Comp3730Component;
  let fixture: ComponentFixture<Comp3730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
