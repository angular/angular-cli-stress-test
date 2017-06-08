/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2062Component } from './comp-2062.component';

describe('Comp2062Component', () => {
  let component: Comp2062Component;
  let fixture: ComponentFixture<Comp2062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
