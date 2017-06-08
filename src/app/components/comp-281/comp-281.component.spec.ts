/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp281Component } from './comp-281.component';

describe('Comp281Component', () => {
  let component: Comp281Component;
  let fixture: ComponentFixture<Comp281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
