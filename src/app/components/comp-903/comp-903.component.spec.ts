/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp903Component } from './comp-903.component';

describe('Comp903Component', () => {
  let component: Comp903Component;
  let fixture: ComponentFixture<Comp903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
