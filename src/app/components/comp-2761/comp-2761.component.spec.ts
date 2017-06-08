/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2761Component } from './comp-2761.component';

describe('Comp2761Component', () => {
  let component: Comp2761Component;
  let fixture: ComponentFixture<Comp2761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
