/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2415Component } from './comp-2415.component';

describe('Comp2415Component', () => {
  let component: Comp2415Component;
  let fixture: ComponentFixture<Comp2415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
