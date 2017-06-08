/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp451Component } from './comp-451.component';

describe('Comp451Component', () => {
  let component: Comp451Component;
  let fixture: ComponentFixture<Comp451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
