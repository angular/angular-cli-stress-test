/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3821Component } from './comp-3821.component';

describe('Comp3821Component', () => {
  let component: Comp3821Component;
  let fixture: ComponentFixture<Comp3821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
