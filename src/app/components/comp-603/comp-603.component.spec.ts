/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp603Component } from './comp-603.component';

describe('Comp603Component', () => {
  let component: Comp603Component;
  let fixture: ComponentFixture<Comp603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
