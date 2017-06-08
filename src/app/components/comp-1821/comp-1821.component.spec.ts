/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1821Component } from './comp-1821.component';

describe('Comp1821Component', () => {
  let component: Comp1821Component;
  let fixture: ComponentFixture<Comp1821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
