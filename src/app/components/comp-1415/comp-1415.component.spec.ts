/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1415Component } from './comp-1415.component';

describe('Comp1415Component', () => {
  let component: Comp1415Component;
  let fixture: ComponentFixture<Comp1415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
