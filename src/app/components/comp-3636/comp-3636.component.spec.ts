/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3636Component } from './comp-3636.component';

describe('Comp3636Component', () => {
  let component: Comp3636Component;
  let fixture: ComponentFixture<Comp3636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
