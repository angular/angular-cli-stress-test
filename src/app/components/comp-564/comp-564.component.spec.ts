/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp564Component } from './comp-564.component';

describe('Comp564Component', () => {
  let component: Comp564Component;
  let fixture: ComponentFixture<Comp564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
