/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3802Component } from './comp-3802.component';

describe('Comp3802Component', () => {
  let component: Comp3802Component;
  let fixture: ComponentFixture<Comp3802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
