/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2344Component } from './comp-2344.component';

describe('Comp2344Component', () => {
  let component: Comp2344Component;
  let fixture: ComponentFixture<Comp2344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
