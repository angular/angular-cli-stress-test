/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4815Component } from './comp-4815.component';

describe('Comp4815Component', () => {
  let component: Comp4815Component;
  let fixture: ComponentFixture<Comp4815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
