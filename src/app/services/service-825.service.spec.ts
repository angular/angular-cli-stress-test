/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service825Service } from './service-825.service';

describe('Service825Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service825Service]
    });
  });

  it('should ...', inject([Service825Service], (service: Service825Service) => {
    expect(service).toBeTruthy();
  }));
});
