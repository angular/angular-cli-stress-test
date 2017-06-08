/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4600Component } from './comp-4600.component';

describe('Comp4600Component', () => {
  let component: Comp4600Component;
  let fixture: ComponentFixture<Comp4600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
