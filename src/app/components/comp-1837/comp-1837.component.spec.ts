/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1837Component } from './comp-1837.component';

describe('Comp1837Component', () => {
  let component: Comp1837Component;
  let fixture: ComponentFixture<Comp1837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
