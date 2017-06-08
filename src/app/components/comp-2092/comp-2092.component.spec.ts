/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2092Component } from './comp-2092.component';

describe('Comp2092Component', () => {
  let component: Comp2092Component;
  let fixture: ComponentFixture<Comp2092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
