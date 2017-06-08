/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3589Component } from './comp-3589.component';

describe('Comp3589Component', () => {
  let component: Comp3589Component;
  let fixture: ComponentFixture<Comp3589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
