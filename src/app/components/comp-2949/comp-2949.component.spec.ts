/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2949Component } from './comp-2949.component';

describe('Comp2949Component', () => {
  let component: Comp2949Component;
  let fixture: ComponentFixture<Comp2949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
