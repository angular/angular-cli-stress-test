/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service690Service } from './service-690.service';

describe('Service690Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service690Service]
    });
  });

  it('should ...', inject([Service690Service], (service: Service690Service) => {
    expect(service).toBeTruthy();
  }));
});
