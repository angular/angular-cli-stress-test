/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp30Component } from './comp-30.component';

describe('Comp30Component', () => {
  let component: Comp30Component;
  let fixture: ComponentFixture<Comp30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
