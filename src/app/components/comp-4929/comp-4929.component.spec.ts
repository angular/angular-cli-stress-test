/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4929Component } from './comp-4929.component';

describe('Comp4929Component', () => {
  let component: Comp4929Component;
  let fixture: ComponentFixture<Comp4929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
