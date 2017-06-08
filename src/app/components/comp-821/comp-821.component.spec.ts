/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp821Component } from './comp-821.component';

describe('Comp821Component', () => {
  let component: Comp821Component;
  let fixture: ComponentFixture<Comp821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
