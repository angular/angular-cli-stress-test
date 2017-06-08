/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp568Component } from './comp-568.component';

describe('Comp568Component', () => {
  let component: Comp568Component;
  let fixture: ComponentFixture<Comp568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
