/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2896Component } from './comp-2896.component';

describe('Comp2896Component', () => {
  let component: Comp2896Component;
  let fixture: ComponentFixture<Comp2896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
