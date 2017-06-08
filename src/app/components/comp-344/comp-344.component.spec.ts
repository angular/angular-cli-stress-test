/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp344Component } from './comp-344.component';

describe('Comp344Component', () => {
  let component: Comp344Component;
  let fixture: ComponentFixture<Comp344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
