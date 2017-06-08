/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2895Component } from './comp-2895.component';

describe('Comp2895Component', () => {
  let component: Comp2895Component;
  let fixture: ComponentFixture<Comp2895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
