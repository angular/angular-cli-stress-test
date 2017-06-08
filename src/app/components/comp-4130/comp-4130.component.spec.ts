/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4130Component } from './comp-4130.component';

describe('Comp4130Component', () => {
  let component: Comp4130Component;
  let fixture: ComponentFixture<Comp4130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
