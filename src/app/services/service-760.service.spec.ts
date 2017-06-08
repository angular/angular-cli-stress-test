/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service760Service } from './service-760.service';

describe('Service760Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service760Service]
    });
  });

  it('should ...', inject([Service760Service], (service: Service760Service) => {
    expect(service).toBeTruthy();
  }));
});
