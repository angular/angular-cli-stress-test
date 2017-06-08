/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4293Component } from './comp-4293.component';

describe('Comp4293Component', () => {
  let component: Comp4293Component;
  let fixture: ComponentFixture<Comp4293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
