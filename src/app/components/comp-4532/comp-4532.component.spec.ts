/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4532Component } from './comp-4532.component';

describe('Comp4532Component', () => {
  let component: Comp4532Component;
  let fixture: ComponentFixture<Comp4532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
