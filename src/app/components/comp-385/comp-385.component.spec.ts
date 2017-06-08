/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp385Component } from './comp-385.component';

describe('Comp385Component', () => {
  let component: Comp385Component;
  let fixture: ComponentFixture<Comp385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
