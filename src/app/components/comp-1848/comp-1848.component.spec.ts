/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1848Component } from './comp-1848.component';

describe('Comp1848Component', () => {
  let component: Comp1848Component;
  let fixture: ComponentFixture<Comp1848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
