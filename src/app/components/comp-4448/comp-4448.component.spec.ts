/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4448Component } from './comp-4448.component';

describe('Comp4448Component', () => {
  let component: Comp4448Component;
  let fixture: ComponentFixture<Comp4448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
