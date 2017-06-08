/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1445Component } from './comp-1445.component';

describe('Comp1445Component', () => {
  let component: Comp1445Component;
  let fixture: ComponentFixture<Comp1445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
