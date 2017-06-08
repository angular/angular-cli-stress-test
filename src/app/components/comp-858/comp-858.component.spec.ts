/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp858Component } from './comp-858.component';

describe('Comp858Component', () => {
  let component: Comp858Component;
  let fixture: ComponentFixture<Comp858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
