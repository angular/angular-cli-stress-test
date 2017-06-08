/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3402Component } from './comp-3402.component';

describe('Comp3402Component', () => {
  let component: Comp3402Component;
  let fixture: ComponentFixture<Comp3402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
