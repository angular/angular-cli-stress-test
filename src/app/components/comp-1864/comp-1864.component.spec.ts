/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1864Component } from './comp-1864.component';

describe('Comp1864Component', () => {
  let component: Comp1864Component;
  let fixture: ComponentFixture<Comp1864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
