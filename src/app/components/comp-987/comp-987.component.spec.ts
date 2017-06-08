/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp987Component } from './comp-987.component';

describe('Comp987Component', () => {
  let component: Comp987Component;
  let fixture: ComponentFixture<Comp987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
