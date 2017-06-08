/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2689Component } from './comp-2689.component';

describe('Comp2689Component', () => {
  let component: Comp2689Component;
  let fixture: ComponentFixture<Comp2689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
