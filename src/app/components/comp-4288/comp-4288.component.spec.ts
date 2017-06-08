/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4288Component } from './comp-4288.component';

describe('Comp4288Component', () => {
  let component: Comp4288Component;
  let fixture: ComponentFixture<Comp4288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
