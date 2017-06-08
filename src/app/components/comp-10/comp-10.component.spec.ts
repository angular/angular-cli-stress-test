/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp10Component } from './comp-10.component';

describe('Comp10Component', () => {
  let component: Comp10Component;
  let fixture: ComponentFixture<Comp10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
