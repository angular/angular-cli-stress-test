/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp675Component } from './comp-675.component';

describe('Comp675Component', () => {
  let component: Comp675Component;
  let fixture: ComponentFixture<Comp675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
