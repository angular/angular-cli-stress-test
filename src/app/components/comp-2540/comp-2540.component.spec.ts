/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2540Component } from './comp-2540.component';

describe('Comp2540Component', () => {
  let component: Comp2540Component;
  let fixture: ComponentFixture<Comp2540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
