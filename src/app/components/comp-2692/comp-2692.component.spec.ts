/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2692Component } from './comp-2692.component';

describe('Comp2692Component', () => {
  let component: Comp2692Component;
  let fixture: ComponentFixture<Comp2692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
