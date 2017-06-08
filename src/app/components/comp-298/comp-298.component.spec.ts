/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp298Component } from './comp-298.component';

describe('Comp298Component', () => {
  let component: Comp298Component;
  let fixture: ComponentFixture<Comp298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
